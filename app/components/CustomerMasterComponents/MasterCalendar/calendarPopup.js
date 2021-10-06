/**
 *
 * CalendarPopup
 *
 */

import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import styles from './styles';
import _ from 'lodash';

function CalendarPopup({
    classes,
    data,
    open,
    handleClose,
}) {
    console.log(data)
    return (
        <Dialog onClose={handleClose} open={open} classes={{ root: classes.dialogBox }}>
            <DialogTitle  disableTypography className={classes.root} style={{ width: '100%' }}>
                <p className={classes.popupTitle}>{data.date}</p>
                <IconButton aria-label="Close" className={classes.closeButton} onClick={handleClose}>
                <CloseIcon />
                </IconButton>
            </DialogTitle >
            <DialogContent classes={{ root: classes.dialogCont }}>
                {_.isEmpty(data.data) ? (
                    <p>
                        Нет записей на этот день
                    </p>
                ) : (
                    <div className={classes.calendarPopupBookings}>
                        {data.data.map((item, i) => (
                            <div key={`${item.id}-${i}`} className={classes.popupBookingsItem}>
                                <div>
                                    {item.start_time.split(':').slice(0, 2).join(':')} {item.customer_name}
                                </div>
                                {/* <Button className={classes.detailsBtn}>Подробнее</Button> */}
                            </div>
                        ))}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

CalendarPopup.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.array,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

const CalendarPopupStyled = withStyles(styles)(CalendarPopup);

export default memo(CalendarPopupStyled);
