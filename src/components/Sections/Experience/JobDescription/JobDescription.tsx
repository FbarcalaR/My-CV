import React from 'react';
import classes from './JobDescription.module.css';

const JobDescription = () => {
    return (
        <>
            <div className={classes['job-header']} >
                <span className={classes['job-title']}>job-title</span>
                <span className={classes['job-date']}>job-date</span>
            </div>
            <span className={classes['job-body']}>
                job description asd a sd as d as d  a sd as das da sdasdasd a sd as dasd asdasdasd as d as d asd asdasdas d asd a sd a sdasdasd asd a sd a sd asdasd asd a sdasd a sd a sd as d wqd qawdqewdqwd qw dqw d qwdqwdqw d qwd qwdqwdqwd qwdqwd qwdqwd qwdqwd qwdqw d qwd qwdqwdqw d qwd
            </span>
        </>
    );
}

export default JobDescription;