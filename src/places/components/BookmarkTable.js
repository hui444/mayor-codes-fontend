import React from "react";

import "./BookmarkTable.css";

const DUMMY_BOOKMARKS = [
  {
    id: 1,
    title: "Timetable #1",
    link:
      "https://nusmods.com/timetable/sem-2/share?CS2030=LAB:02,LEC:1,REC:02&MA1521=TUT:11,LEC:1",
    description: "CS2030, MA1521",
  },

  {
    id: 2,
    title: "Timetable #2",
    link: "https://nusmods.com/timetable/sem-2",
    description: "IS2101, MA1101R",
  },
];

const BookmarkTable = () => {
  return (
    <table className="table-design" id="myBookmarks">
      <thead>
        <tr>
          <th>Timetable Name</th>
          <th>Modules Taken</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="column1-table">
            <a
              href="https://nusmods.com/timetable/sem-2/share?CS2030=LAB:02,LEC:1,REC:02&MA1521=TUT:11,LEC:1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Timetable 1
            </a>
          </td>
          <td className="column2-table">IS2101, CS2040</td>
        </tr>
        <tr>
          <td className="column1-table">
            <a
              href="https://sg.yahoo.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              Timetable 2
            </a>
          </td>
          <td className="column2-table">MA1521, EC1301</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookmarkTable;
