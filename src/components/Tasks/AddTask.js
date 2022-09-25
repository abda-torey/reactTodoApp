import { useState, forwardRef } from "react";
import { Calendar2, Pencil, Trash } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import FilterTask from "./FilterTask";
import SortTask from "./SortTask";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./addTask.module.css";

const AddTask = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const CalendarInput = forwardRef(({ value, onClick }, ref) => (
    <Calendar2 onClick={onClick} ref={ref} />
  ));

  return (
    <section>
      <div className="container">
        <div className="row m-1 p-3">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
                <input
                  className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                  type="text"
                  placeholder="Add new .."
                />
              </div>
              <div className="col-auto m-0 px-2 d-flex align-items-center w-">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  customInput={<CalendarInput />}
                />
              </div>
              <div className="col-auto px-0 mx-0 mr-2">
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 mx-4 my-4 border-black-25 border-bottom"></div>

        <div className="row justify-content-center justify-content-lg-end gx-3 gy-5">
          <FilterTask />
          <SortTask />
        </div>
        

        <div className="row my-5">
          <div className="col-1">
            <input type="checkbox" value="" id="flexCheckChecked" checked />
          </div>
          <div className="col-7">
            <input
              type="text"
              class="form-control  border-0  bg-transparent rounded px-3"
              readonly
              value="Buy groceries for next week"
              title="Buy groceries for next week"
            />
          </div>
          <div className="col-3">
            <h6>25 Sep 2022</h6>
          </div>
          <div className="col-1">
           
              <Trash />
           
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddTask;
