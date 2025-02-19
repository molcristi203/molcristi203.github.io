import SectionTitle from "../section_title";
import Section from "@/app/section"
import Gallery from "../gallery";
import Image from "next/image";

export default function EnergyManagement()
{
  return (
    <div>
      <SectionTitle title="Energy Management" backButton={true}/>
      <Section left={[
        <p key={0}>
          Energy management app based on microservice architecture. It consists of a web application that provides functionality to store in databases users, devices, a way to monitor the consumption of the devices and a chat for clients to communicate with admins.
        </p>
      ]} right={[
        <Image
          src={"/images/energy_management/energy_management.png"}
          width={2000}
          height={2000}
          alt="Homepage"
          className="h-full object-scale-down"
          key={1}
        />
      ]}
      />
      <Section left={[
        <Image
          src={"/images/energy_management/energy_management2.png"}
          width={2000}
          height={2000}
          alt="Users page"
          className="h-full object-scale-down"
          key={2}
        />
      ]} right={[
        <p key={3}>
          The web application provices an user management system. Two roles for users are provided - ADMIN and CLIENT, the ADMIN has access to all the functionalities of the app and the CLIENT only has access to their devices and the chat. A login system is provided such that users can create an account to use the app and for simplicity the role of the user is chosen when a new account is created.
        </p>
      ]} />
      <Section left={[
        <p key={4}>
          The interface for devices management provides the ADMINS a way to create, edit and remove devices from users.
        </p>
      ]} right={[
        <Image
          src={"/images/energy_management/energy_management3.png"}
          width={2000}
          height={2000}
          alt="Devices page"
          className="h-full object-scale-down"
          key={5}
        />
      ]}
      />
      <Section left={[
        <Image
          src={"/images/energy_management/energy_management4.png"}
          width={2000}
          height={2000}
          alt="Chat page"
          className="h-full object-scale-down"
          key={6}
        />
      ]} right={[
        <p key={7}>
          A chatting system is implemented within the application. CLIENTS can start a chat and wait for an ADMIN to accept the chat, after that the chat window is created and CLIENTS and ADMINS can send and receive messages.
        </p>
      ]} />
      <Gallery paths={["/images/energy_management/energy_management.png", "/images/energy_management/energy_management2.png", "/images/energy_management/energy_management3.png", "/images/energy_management/energy_management4.png"]}/>
    </div>
  );
}