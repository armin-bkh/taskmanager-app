import { useLocation, useParams } from "react-router-dom";
import { Section } from "../Components/styled-components/Section.style";
import Layout from "../Layout/Layout";

const TaskDetailPage = () => {
    return (
        <Layout>
            <Section>
                <h1>Task Detail Page</h1>
            </Section>
        </Layout>
    )
}

export default TaskDetailPage;