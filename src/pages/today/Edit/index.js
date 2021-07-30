import React, { useEffect, useRef, useState } from "react";
import { editDay } from "@/api/today";
const Edit = ({ location }) => {
  const { id } = location.state;
  const isDistory = useRef(false);
  const [list, setlist] = useState({});
  useEffect(() => {
    isDistory.current = true;
    const getList = async () => {
      const { data } = await editDay({
        summary_id: id,
      });
      if (data && data.code !== 200) return;
      setlist(data.data);
    };
    if (isDistory.current) {
      getList();
    }
    console.log("list", list);
    return () => {
      isDistory.current = false;
    };
  });
  return <div>编辑页面</div>;
};
export default Edit;
