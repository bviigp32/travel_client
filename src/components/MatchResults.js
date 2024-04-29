import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./MatchResults.css";

function MatchResults() {
  const location = useLocation();
  const data = location.state; // Ensure state data is passed correctly

  return (
    <div className="results-container">
      {data ? (
        data.map((traveler, index) => (
          <Card
            style={{ borderRadius: "20px" }}
            key={index}
            className="traveler-card"
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {traveler.username || "Unknown Traveler"}
              </Typography>
              <hr />
              <Typography variant="body2" color="text.secondary">
                <strong>Gender:</strong> {traveler.gender}
                <br />
                <strong>Country of Residence:</strong>{" "}
                {traveler.country_of_residence}
                <br />
                <strong>Country to Visit:</strong> {traveler.country_to_visit}
                <br />
                <strong>Travel Budget:</strong> {traveler.travel_budget}
                <br />
                <strong>Accommodation Preferences:</strong>{" "}
                {traveler.accommodation_preferences}
              </Typography>
              <hr />
            </CardContent>

            <CardActions>
              <Button
                style={{
                  borderRadius: "10px",
                  /* Highly rounded corners for buttons */
                  fontWeight: "bold",
                  backgroundColor: "#4b76a5",
                  /* Smooth background color transition on hover */
                }}
                size="small"
                color="primary"
                variant="contained"
                className="action-button"
              >
                Apply
              </Button>
              <Button
                style={{
                  borderRadius: "10px",
                  /* Highly rounded corners for buttons */
                  fontWeight: "bold",
                  backgroundColor: "#5d4ac5",
                  /* Smooth background color transition on hover */
                }}
                size="small"
                color="secondary"
                variant="contained"
                className="action-button"
              >
                Message
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="text.primary">
          No matching travelers found.
        </Typography>
      )}
    </div>
  );
}

export default MatchResults;
