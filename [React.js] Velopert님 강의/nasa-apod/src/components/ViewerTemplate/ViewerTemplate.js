
import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({viewer, spaceNavigator}) => (
    <div className="{cx('viewer-template')}">
        <header>
            Astronomy Picture of the Day
        </header>
        <div className={cx('viewer-wrapper')}>
            {viewer}
            <div className={cx('space-navigator-wrapper')}>
                {spaceNavigator}
            </div>
        </div>
    </div>
)

export default ViewerTemplate;