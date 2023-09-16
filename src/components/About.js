import User from "./User";
import USerClass from "./UserClass";

function About() {
  return (
    <div>
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-800">
        {" "}
        <h1>THis is About Us Page</h1>
        <h1>What About you ?</h1>
      </div>
      <User />
      <USerClass name="Vishu class component" />
    </div>
  );
}

export default About;
