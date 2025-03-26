import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [committeeData, setCommitteeData] = useState(null);
  const [downloadData, setDownloadData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registerForm, setRegisterForm] = useState("");
  const [abstractLink, setAbstractLink] = useState("");
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    const abstractData = async () => {
      try {
        const response = await axios.get("assets/abstract.json");
        setPapers(response.data);
      } catch (error) {
        console.error("Error fetching papers:", error);
      }
    };

    const fetchCommitteeData = async () => {
      try {
        const response = await axios.get(
          "https://www.icmdrse.com/API/comitteemem.php"
        );

        // console.log("Committee API Response:", response.data); // Debugging log

        if (!response.data) {
          console.error("Error: Committee data is missing");
          setCommitteeData([]); // Set empty array to prevent errors
          return;
        }

        setCommitteeData(response.data);
      } catch (error) {
        console.error("Error fetching committee data:", error);
        setCommitteeData([]); // Prevent crashes if API fails
      }
    };

    const fetchDownloadData = async () => {
      try {
        const response = await axios.get(
          "https://www.icmdrse.com/API/impdates.php"
        );

        // console.log("API Response:", response.data);

        if (!response.data || !response.data["Download_section"]) {
          console.error("Error: Download_section is missing in API response");
          setDownloadData([]); // Set an empty array to avoid errors
          return;
        }

        const apiData = response.data["Download_section"];
        const downloadform = apiData.find(
          (item) => item.Heading === "Registration Form"
        );
        const abstractlink = apiData.find(
          (item) => item.Heading === "Sample Abstract"
        );

        setAbstractLink(abstractlink?.filelink || "");
        setRegisterForm(downloadform?.filelink || "");

        // Ensure isLast is treated as a boolean (if it's a string in API)
        const updatedData = apiData.map((item, index) => ({
          ...item,
          isLast: item.isLast === true || item.isLast === "true", // Ensure boolean
          bg: getBgColor(index),
          bg1: getTextColor(index),
        }));

        setDownloadData(updatedData);
      } catch (error) {
        console.error("Error fetching download data:", error);
        setDownloadData([]); // Prevent crashing if API fails
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchCommitteeData(), fetchDownloadData()]);
      setLoading(false);
    };
    abstractData();
    fetchData();
  }, []);

  // Function to get background colors dynamically
  const getBgColor = (index) => {
    const colors = [
      "#d6ffe8",
      "#eddcc5",
      "#f1cfd5",
      "#ded0ff",
      "#d9d9d9",
      "#d6e6ff",
    ];
    return colors[index % colors.length]; // Rotate colors
  };

  // Function to get text colors dynamically
  const getTextColor = (index) => {
    const colors = [
      "#007835",
      "#bd6c00",
      "#ef0f3a",
      "#500fef",
      "#686868",
      "#002e6e",
    ];
    return colors[index % colors.length]; // Rotate colors
  };

  return (
    <DataContext.Provider
      value={{
        committeeData,
        downloadData,
        loading,
        registerForm,
        abstractLink,
        papers,
      }}>
      {children}
    </DataContext.Provider>
  );
};
