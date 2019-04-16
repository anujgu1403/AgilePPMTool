import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  getProjectTask,
  updateProjectTask
} from "../../../actions/backlogActions";
import PropTypes from "prop-types";

class UpdateProjectTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      projectSequence: "",
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: "",
      dueDate: "",
      projectIdentifer: "",
      create_At: "",
      errors: {}
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    const { backlog_id, pt_id } = this.props.match.params;
    this.props.getProjectTask(backlog_id, pt_id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
    this.setState({
      id: nextProps.project_task.id,
      projectSequence: nextProps.project_task.projectSequence,
      summary: nextProps.project_task.summary,
      acceptanceCriteria: nextProps.project_task.acceptanceCriteria,
      status: nextProps.project_task.status,
      priority: nextProps.project_task.priority,
      projectIdentifer: nextProps.project_task.projectIdentifer,
      dueDate: nextProps.project_task.dueDate,
      create_At: nextProps.project_task.create_At
    });
  }

  // on change
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //on submit
  submitHandler(e) {
    e.preventDefault();
    const { backlog_id } = this.props.match.params;
    const updatedTask = {
      id: this.state.id,
      projectSequence: this.state.projectSequence,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      projectIdentifer: this.state.projectIdentifer,
      dueDate: this.state.dueDate,
      create_At: this.state.create_At
    };
    this.props.updateProjectTask(
      this.state.projectIdentifer,
      this.state.projectSequence,
      updatedTask,
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${this.state.projectIdentifer}`}
                className="btn btn-light"
              >
                Back to Project Board
              </Link>
              <h4 className="display-4 text-center">Update Project Task</h4>
              <p className="lead text-center">
                Project Name: {this.state.projectIdentifer} + Project Code:{" "}
                {this.state.projectSequence}
              </p>
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.summary
                    })}
                    name="summary"
                    placeholder="Project Task summary"
                    value={this.state.summary}
                    onChange={this.changeHandler}
                  />
                  {errors.summary && (
                    <div className="invalid-feedback">{errors.summary}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria}
                    onChange={this.changeHandler}
                  />
                </div>
                <h6>Due Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="dueDate"
                    value={this.state.dueDate}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="priority"
                    value={this.state.priority}
                    onChange={this.changeHandler}
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={this.state.status}
                    onChange={this.changeHandler}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  project_task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  updateProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project_task: state.backlog.project_task,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProjectTask, updateProjectTask }
)(UpdateProjectTask);
