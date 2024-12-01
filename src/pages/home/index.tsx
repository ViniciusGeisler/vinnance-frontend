import { Sidebar, SidebarItem } from "@/components/sidebar";
import { HomeIcon } from "@/icons/HomeIcon";

export function HomePage() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar>
        <SidebarItem 
          icon={<HomeIcon width={20}/>}
          text="Home"
          active
        />
        <SidebarItem 
          icon={<HomeIcon width={20}/>}
          text="Home"
          alert
        />
      </Sidebar>
    </div>
  )
}