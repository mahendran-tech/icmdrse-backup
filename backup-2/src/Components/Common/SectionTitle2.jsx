import parse from "html-react-parser";

const SectionTitle2 = ({Title, isCenter = false}) => {
  return (
    <div>
      <h2
        className="cs_section_title cs_fs_30 mb-2 wow pulse"
        style={{textAlign: isCenter ? "center" : "left"}}>
        {parse(Title)}
      </h2>
    </div>
  );
};

export default SectionTitle2;
