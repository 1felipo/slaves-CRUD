import { useState, useContext } from "react";
import axios from "axios";

import ThemeContext from "../../configuration/theme";
import config from "../../configuration/config";
import "./SlaveCard.css";

interface SlaveCardProps {
  slaveId: string;
  slaveName: string;
  slaveDescription: string;
  slaveStatus: boolean;
}

const SlaveEditCard = (props: SlaveCardProps) => {
  const [slaveNameEdit, setSlaveNameEdit] = useState(props.slaveName);
  const [slaveDescriptionEdit, setSlaveDescriptionEdit] = useState(
    props.slaveDescription
  );

  const theme = useContext(ThemeContext);

  const putSlaveEdit = (id: string) => {
    let data = {
      slave: slaveNameEdit,
      description: slaveDescriptionEdit,
    };
    axios.put(config.putSlaveEditEndPoint + id, data);
  };

  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setSlaveNameEdit(e.currentTarget.value);
  };
  const handleChangeDescription = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setSlaveDescriptionEdit(e.currentTarget.value);
  };

  return (
    <div
      className="edit-slave-container"
      style={{ background: theme.softColor }}
    >
      <input
        style={{ background: theme.softColor, color:theme.inverseColor }}
        value={slaveNameEdit}
        onChange={(event) => handleChangeName(event)}
      />
      <textarea
        style={{ background: theme.softColor, color:theme.inverseColor }}
        value={slaveDescriptionEdit}
        onChange={(event) => handleChangeDescription(event)}
      ></textarea>
      <button onClick={() => putSlaveEdit(props.slaveId)}>Edit</button>
    </div>
  );
};

const SlaveCard = (props: SlaveCardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteSlave = async (id: string) => {
    await axios.delete(config.deleteSlaveEndPoint + id);
  };
  const putSlaveStatus = (id: string) => {
    axios.put(config.putSlaveStatusEndPoint + id);
  };

  const handleToggleEdit = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        className="slave-container-main"
        style={{ background: theme.softColor }}
      >
        <div className="slave-data">
          <h3 style={{ color: theme.inverseColor }}>{props.slaveName}</h3>
          <p style={{ color: theme.inverseColor }}>{props.slaveDescription}</p>
        </div>

        <div className="slave-controllers">
          <button onClick={() => deleteSlave(props.slaveId)}>Delete</button>
          <button
            style={
              props.slaveStatus
                ? { background: "#36AE7C" }
                : { background: "#F32424" }
            }
            onClick={() => putSlaveStatus(props.slaveId)}
          >
            Sold?
          </button>
          <button onClick={handleToggleEdit}>Edit</button>
        </div>
      </div>
      {isEditing ? (
        <SlaveEditCard
          slaveId={props.slaveId}
          slaveName={props.slaveName}
          slaveDescription={props.slaveDescription}
          slaveStatus={props.slaveStatus}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default SlaveCard;
