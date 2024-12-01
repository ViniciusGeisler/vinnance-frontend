import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/icons/ArrowRightIcon";
import { VericalThreeDotsIcon } from "@/icons/VericalThreeDotsIcon";
import { Button } from "@nextui-org/button";
import { createContext, useContext, useState } from "react";


interface SidebarContext {
  expanded: boolean;
}

const SidebarContext = createContext({expanded: false} as SidebarContext);
export function Sidebar({ children }: { children?: React.ReactNode }) {

  const [expanded , setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Banco_Bradesco_logo_%28horizontal%29.png/1280px-Banco_Bradesco_logo_%28horizontal%29.png"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt="logo"  
          />
          <Button 
            isIconOnly
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </Button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img 
            src="https://logospng.org/wp-content/uploads/kibon.png"
            className="w-10 h-10 rounded-md"
          />
          <div 
            className={`
              flex justify-between items-center w-52 ml-3
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`
            } 
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <VericalThreeDotsIcon width={24} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({icon, text, active, alert}: any) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li className={`
      relative flex items-center py-2 px-3 my-1 
      font-medium rounded-md cursor-pointer 
      transition-colors group
      ${
        active ? "bg-gradient-to-tr from-green-200 to-emerald-100 text-green-800"
        : "hover:bg-indigo-50 text-gray-600"
      }
    `}>
      {icon}
      <span 
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${expanded ? "" : "top-2"}`} />
      )}

      {!expanded && (
        <div 
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-green-100 text-green-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  )
}