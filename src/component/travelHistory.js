import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const TravelHistory = ({ travelHistory = [] }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {travelHistory.map(({ startAddress, endAddress }, i) => {
        return (
          <TimelineItem key={startAddress + i}>
            <TimelineOppositeContent color="text.secondary">
              {startAddress}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {travelHistory.length - 1 !== i ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>{endAddress}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
export default TravelHistory;
