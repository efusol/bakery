import React from "react";
import BoardDetailSection from "../components/baord/BoardDetailSection";
import Title from "@/components/common/Title";
import { useLocation } from "react-router-dom";

const BoardDetailView = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div className="row">
      <Title title="공지사항" />
      <BoardDetailSection item={item} />
    </div>
  );
};

export default BoardDetailView;
