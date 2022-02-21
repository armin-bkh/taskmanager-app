import { Section } from "../Components/styled-components/Section.style";
import TaskDetail from "../Components/TaskDetail/TaskDetail";
import Layout from "../Layout/Layout";

const TaskDetailPage = () => {
  return (
    <Layout>
      <Section>
        <TaskDetail />
      </Section>
    </Layout>
  );
};

export default TaskDetailPage;
