import './App.css';
import Country from './Component/allCountry/Country';
import ToogleBtn from './Component/Multiple Toggle Button/ToogleBtn';
import SortTable from './Component/React Table Sort/SortTable';
import ReactSelect from './Component/React-Select/ReactSelect';
import SearchTable from './Component/Search Filter/SearchTable';
import Pagination from './Component/Table with Pagination/Pagination';

function App() {
  return (
    <div className="App">
     {/* <SortTable /> */}
     {/* <SearchTable /> */}
     {/* <Pagination /> */}
     {/* <ToogleBtn /> */}
     <ReactSelect />
     {/* <Country /> */}

    </div>
  );
}

export default App;
