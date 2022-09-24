import Card from "../Layout/Card";
import AddTask from "./AddTask";

const Tasks = (props) => {
  return (
    <Card>
      <div class="row m-1 p-4">
        <div class="col">
          <div class="p-1 h2 text-primary text-center mx-auto display-inline-block">
            
            <u>My Tasks</u>
            
          </div>
        </div>
      </div>
      <AddTask />

    </Card>
  );
};

export default Tasks;
