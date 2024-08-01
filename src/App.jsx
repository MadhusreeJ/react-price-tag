import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import Card from "./Card";
function App() {
  const cards = [
    {
      plan: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : false
        },
        {
          name: "Dedicated Phone Support",
          enable : false
        },
        {
          name: "Free Subdomain",
          enable : false
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "Plus",
      price: 9,
      features: [
        {
          name: "5 User",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "Pro",
      price: 49,
      features: [
        {
          name: "Unlimited User",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated Phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : true
        },
      ],
    },
  ];
  return (
    <div className="container">
      <Heading />
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
      </main>
    </div>
  );
}
export default App;