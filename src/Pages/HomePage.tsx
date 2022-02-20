import { Section } from "../Components/styled-components/Section.style";
import TaskList from "../Components/TaskList/TaskList";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Section>
        <TaskList />
      </Section>
    </Layout>
  );
};
export default HomePage;
