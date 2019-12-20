import React, { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../UI/Button";
import Table from "../Table";
import "./ManagersTable.css";

const ManageManagers = ({ setActiveManager }) => {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://studiorganiser.firebaseio.com/test.json")
      .then(response => {
        const ids = Object.keys(response.data);
        const newManagers = [];
        ids.forEach(id => {
          newManagers.push({
            ...response.data[id],
            id
          });
        });
        setManagers(newManagers);
        setLoading(false);
      });
  }, []);

  const deleteManagerHandler = async manager => {
    setLoading(true);
    await axios.delete(
      `https://studiorganiser.firebaseio.com/test/${manager.id}.json`
    );
    const newManagers = managers.filter(m => m.id !== manager.id);
    setManagers(newManagers);
    setLoading(false);
  };

  return (
    <div className="ManagersTable">
      <h3>Managers</h3>
      {loading ? (
        <FontAwesomeIcon icon="circle-notch" spin size="lg" />
      ) : (
        <Table
          headings={[
            { text: "Name", key: "name" },
            { text: "Age", key: "age" },
            { text: "Active", key: "active" },
            { text: "", key: "edit" },
            { text: "", key: "delete" }
          ]}
          data={managers.map(manager => ({
            ...manager,
            active: manager.active ? (
              <FontAwesomeIcon icon="grin-alt" color=" #00ad43" size="lg" />
            ) : (
              <FontAwesomeIcon icon="frown" color=" #EF3340" size="lg" />
            ),
            edit: (
              <FontAwesomeIcon
                onClick={() => setActiveManager(manager)}
                icon="pen"
                size="lg"
              />
            ),
            delete: (
              <FontAwesomeIcon
                onClick={() => deleteManagerHandler(manager)}
                icon="trash-alt"
                color="#8A8D8F"
                size="lg"
              />
            )
          }))}
        />
      )}
      {!loading ? (
        // <button
        //   type="button"
        //   className="submitButton"
        //   onClick={() => setActiveManager({})}
        // >
        //   Add Manager
        // </button>
        <Button type="button" onClick={() => setActiveManager({})}>
          Add Manager
        </Button>
      ) : null}
    </div>
  );
};

export default ManageManagers;
