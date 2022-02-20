import AddTaskForm from "../Components/AddTaskForm/AddTaskForm";
import { Section } from "../Components/styled-components/Section.style";
import Layout from "../Layout/Layout";

const AddTaskPage = () =>{
    return (
        <Layout>
            <Section>
                <AddTaskForm />
            </Section>
        </Layout>
    )
}

export default AddTaskPage;