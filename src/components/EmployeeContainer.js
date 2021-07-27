import React from "react"
class EmployeeContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    render() {
        return (
            <div className="fixed inset-0 flex justify-left bg-blue-300 m-5 rounded p-5">
                <ul className="list-outside md:list-inside list-none md:list-disc">
                    {this.state.todos.map(todo => (
                        <li>{todo.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default EmployeeContainer