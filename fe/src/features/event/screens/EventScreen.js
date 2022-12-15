import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import EventInfoSection from "../components/event-info-section/EventInfoSection";
import EventContentSection from "../components/event-content-section/EventContentSection";
import EventRecommendSection from "../components/event-recommend-section/EventRecommendSection";
import EventScreenHeader from "../components/event-screen-header/EventScreenHeader";

import "./event-screen.css";

const EventScreen = () => {
  let { id } = useParams();
  const [param, setParam] = useState(id - "0");

  const [eventDetail, setEventDetail] = useState({});
  const [recommededEvents, setRecommendedEvents] = useState([]);

  useEffect(() => {
    const fetchEventDetail = async () => {
      const fetchedEventDetail = await axios.get(
        `http://localhost:4000/events/${param}`
      );
      setEventDetail(fetchedEventDetail.data.result.result);
    };
    fetchEventDetail();
  }, [param]);

  useEffect(() => {
    const fetchRecommendedEvents = async () => {
      const fetchedRecommendedEvents = await axios.get(
        `http://localhost:4000/recommend/events/${param}`
      );
      setRecommendedEvents(fetchedRecommendedEvents.data.result);
    };
    fetchRecommendedEvents();
  }, [param]);

  const {
    eventName,
    eventLogo,
    period,
    contentImageUrl,
    applicantCount,
    link,
    viewCount,
  } = eventDetail;

  return (
    <div>
      <EventScreenHeader />
      <EventInfoSection
        eventName={eventName}
        eventLogo={eventLogo}
        period={period}
        applicantCount={applicantCount}
        viewCount={viewCount}
        link={link}
      />
      <EventContentSection contentImageUrl={contentImageUrl} />
      <EventRecommendSection events={recommededEvents} setParam={setParam} />
    </div>
  );
};

export default EventScreen;
