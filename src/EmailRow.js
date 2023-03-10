import "./EmailRow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject} <span className="emailRow_description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
};

export default EmailRow;
