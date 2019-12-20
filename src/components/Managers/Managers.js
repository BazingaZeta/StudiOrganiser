import React, { useState } from "react";
import Card from "../../UI/Card";

import ManagersTable from "./ManagersTable";
import "./Managers.css";
import AddManager from "./AddManager";

const Managers = () => {
  const [activeManager, setActiveManager] = useState(null);

  return (
    <section className="Managers">
      <Card>
        {activeManager ? (
          <AddManager
            onSuccess={() => setActiveManager(null)}
            defaultValues={activeManager}
          />
        ) : (
          <ManagersTable setActiveManager={setActiveManager} />
        )}
      </Card>
    </section>
  );
};

export default Managers;
