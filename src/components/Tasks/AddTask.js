import { useState,forwardRef } from "react";
import { Calendar2 } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import FilterTask from "./FilterTask";
import SortTask from "./SortTask";
import 'react-datepicker/dist/react-datepicker.css';




const AddTask = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const CalendarInput = forwardRef(({value,onClick }, ref) =>(
    
    <Calendar2 onClick={onClick} ref={ref} />
    
  ));

  
  return (
    <section>
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
                startDate = {startDate}
                customInput = {<CalendarInput />}
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
     
      <div className="p-2 mx-4 border-red-25 border-bottom"></div>
      <div class="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
        <FilterTask />
        </div>
       
        <div className="col-auto d-flex align-items-center px-1 pr-3">
        <SortTask />
        </div>

        <div className="mx-1  px-5 pb-3 w-80">
            <div className=""></div>
        </div>
      
        
    </div>
      
    </section>
  );
};
export default AddTask;
