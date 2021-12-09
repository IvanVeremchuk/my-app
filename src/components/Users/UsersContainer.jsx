import { connect } from 'react-redux';
import {
     follow, 
     setCurrentPage, 
     unfollow,
     toggleFollowingProgress,
     getUsers
     } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import React from "react";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.gatUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.gatUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null } 
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.props.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                FollowingInProgress={this.props.FollowingInProgress}
            />
        </> 
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:  state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        FollowingInProgress: state.useresPage.FollowingInProgress
    }
}

  
export default compose(
    withAuthRedirect,
    connect (mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainer)