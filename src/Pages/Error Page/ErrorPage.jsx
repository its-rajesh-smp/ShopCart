import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
function ErrorPage() {
  const navigate = useNavigate();
  // On Click Navigate to home
  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="ErrorPage remove__Header">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/bodybook-4ef51.appspot.com/o/404%20Error%20Page%20not%20Found%20with%20people%20connecting%20a%20plug-cuate.png?alt=media&token=c0e90bfd-ba0f-4999-8d15-41d4bf07f222&_gl=1*1l4dfl2*_ga*ODM3Njk3NDY2LjE2ODYzMDEwMzU.*_ga_CW55HF8NVT*MTY4NjY0NTk2NC4xMS4xLjE2ODY2NDU5ODMuMC4wLjA."
        alt=""
      />
      <h1>PAGE NOT FOUND</h1>
      <button onClick={onClick}>Go Back To Home</button>
    </div>
  );
}

export default ErrorPage;
