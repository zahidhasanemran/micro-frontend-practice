import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div className="bg-blue-900 text-white p-5">
      <div>{count()}</div>
      <button onClick={() => setCount(count() + 1)}> + Add </button>
    </div>
  );
};

/*
extract the component or codes into it's own library 
and then import it back into remote and host. if we need to change 
we have to chage in the shared library 
module federation allows you to run time share codes
between these two applications. 
*/
