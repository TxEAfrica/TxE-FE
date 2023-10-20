import { useNavigate } from "react-router-dom";
import certificate from "../../assets/photo4.png";
import grantPic from "../../assets/photo4.png";
import win from "../../assets/winPC.png";
import win1 from "../../assets/winPC.jpg";
import scholarship from "../../assets/event-min.png";
import "../Landing.css";

const Highlight = () => {
  const navigate = useNavigate();

  const cards = [
    {
      image: grantPic,
      title: "Business Grant",
      description:
        "Top Qualified Applicants & Participants will be going home with Business Grants 🎉🏆",
      formLink: "https://forms.gle/h6reLGjNLYi7hC7E9",
    },
    {
      image: win1,
      title: "Free Laptops",
      description:
        "Top Qualified Applicants & Participants will be going home with Laptops 🎉🏆",
      formLink: "https://forms.gle/wvnbwGtwGCAqSiBh7",
    },
    {
      image: scholarship,
      title: "Tech Scholarships",
      description:
        "Top Qualified Applicants & Participants will be going home with valuable scholarships 🎉🏆",
      formLink: "https://forms.gle/xUwowPbsNtE6DvbPA",
    },
    {
      image: certificate,
      title: "Get Certificate",
      description:
        "Earn a certificate of participation for joining our incredible tech event!",
      formLink: "https://forms.gle/ihiVFjT6eKt3yvKG9",
    },
  ];

  const handleApplyClick = (formLink) => {
    window.open(formLink, "_blank");
  };

  return (
    <div id="highlight" className="px-3 lg:px-20 bg-orange-50">
      <div className="flex flex-col justify-center items-center md:mb-10">
        <h1
          id="section-heading"
          className="text-5xl text-white text-center lg:text-left font-bold"
        >
          Event Highlights
        </h1>
        <div className="text-lg text-white mt-6 flex flex-col justify-center items-center">
          TxE Summit 2023
          <div className="flex space-x-2 mt-2 lines">
            <div className="w-56 h-1 rounded-full bg-orange"></div>
            <div className="w-56 h-1 rounded-full bg-white"></div>
          </div>
        </div>
      </div>

      <div className="lg:flex highlight-container mt-10 lg:mt-0 space-y-5 md:space-y-0 lg:space-x-5 text-gray-400 box-holder">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center highlight-box"
          >
            <div className="px-4 py-8 rounded-md h-fit space-y-4 flex flex-col justify-center items-center text-center lg:text-center lg:justify-center lg:items-center">
              <div className="h-fit rounded-md overflow-none">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <h1 className="text-3xl font-bold w-full">{card.title}</h1>
              <p className="md:w-2/3 lg:w-full">{card.description}</p>
              <div
                className="text-orange-500 bg-orange flex justify-center items-center text-center text-white rounded-md w-64 py-3 cursor-pointer"
                onClick={() => handleApplyClick(card.formLink)}
              >
                Apply
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
