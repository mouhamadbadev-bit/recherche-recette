import { useState, type ChangeEvent,type FormEvent } from "react";

interface MyInputProps {
  onSearch: (value: string) => void;
}

export default function MyInput({ onSearch }: MyInputProps) {
  const [input, setInput] = useState<string>("");

  const aiger = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const genbu = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className=" ">
      <form onSubmit={genbu} className="min-[375px]:flex min-[375px]:justify-center min-[375px]:gap-x-7 mb-4.5  ">
        <input 
          type="text" 
          placeholder="search your recette "
          name="value" 
          value={input} 
          onChange={aiger} 
          className="outline-0 text-emerald-700 text-2xl pl-0.5 py-2 min-[320px]:flex min-[320px]:justify-self-center  focus:border-emerald-950 focus:border-2 focus:rounded-2xl"
        />
        <button type="submit" className="bg-emerald-800 min-[320px]:flex min-[320px]:justify-self-center min-[320px]:py-1.5 hover:border-2 min-[320px]:mt-1.5 min-[320px]:px-20 min-[375px]:px-4 rounded-2xl text-white hover:text-emerald-900 hover:rounded-2xl  hover:bg-amber-50 ml-1 mr-0.5">search</button>
      </form>
    </div>
  );
}