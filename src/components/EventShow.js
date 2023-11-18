import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { formatDate } from "../utils/formatTime";

const Container = styled("div")({
  maxWidth: "750px",
  textAlign: "left",
  margin: "0 20px",
  marginTop: 30,
});

const Heading = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "2.8rem",
});

const Date = styled(Typography)({
  fontFamily: "Georgia, serif",
  fontSize: "1.5rem",
});

const EventShow = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/events/${eventId}`)
      .then((response) => response.json())
      .then(({ data }) => setEvent(data))
      .catch((error) => console.error(error));
  }, [eventId]);

  if (!event) {
    return <div>Loading event...</div>;
  }

  return (
    <Container>
      <Box height={80}></Box>
      <Heading>{event.attributes?.title}</Heading>
      <Date>{formatDate(event.attributes?.date)}</Date>
      <Date>{event.attributes?.formatted_time_range}</Date>
      <Typography
        sx={{ fontWeight: "bold", whiteSpace: "pre-line", mt: 5, mb: 4 }}
      >
        {event.attributes?.summary}
      </Typography>
      <Typography sx={{ whiteSpace: "pre-line" }}>
        {event.attributes?.description}
      </Typography>
      <Typography sx={{ 
        textAlign: "center",
        fontFamily: "Georgia",
        fontSize: "1.5rem",
        lineHeight: "2rem", 
        mt: 5,}}>
        <Link
          style={{ color: "black" }}
          to={{
            pathname: `/events`,
          }}
          key={event.id}
        >
          Back to All Events
        </Link>
      </Typography>
      <Box height={80}></Box>
    </Container>
  );
};

export default EventShow;
