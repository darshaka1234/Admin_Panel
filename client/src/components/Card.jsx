import { Typography } from "@mui/material";

const Card = ({ count, t1, t2 }) => {
  const cardStyles = {
    card: {
      width: "250px",
      height: "100px",
      borderRadius: "20px",
      backgroundColor: "#2463e9",
      marginTop: "40px",
      marginLeft: "35px",
      paddingTop: "5px",
    },
    text1: {
      color: "white",
      fontWeight: "700",
      fontSize: "35px",
      marginBottom: "-7px",
    },
    text2: {
      color: "green",
      fontWeight: "300",
    },
    text3: {
      color: "white",
      fontWeight: "500",
    },
  };

  return (
    <div className="card" style={cardStyles.card}>
      <Typography align="center" style={cardStyles.text1}>
        {count}
      </Typography>
      <Typography align="center" style={cardStyles.text2}>
        {t1}
      </Typography>
      <Typography align="center" style={cardStyles.text3}>
        {t2}
      </Typography>
    </div>
  );
};

export default Card;
