import React, { useState, useEffect } from 'react';
import moment from 'moment';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Box } from '@chakra-ui/react';

const GithubCalendar = () => {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/AnshulKumarYadav/events`)
      .then(response => response.json())
      .then(data => {
        // Filter out non-commit events and extract the date information
        const commitEvents = data.filter(event => event.type === 'PushEvent');
        const commitDates = commitEvents.map(event => moment(event.created_at).format('YYYY-MM-DD'));
        // Create an object with the number of commits per date
        const commitCounts = commitDates.reduce((acc, date) => {
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});
        // Convert the object into an array of objects with 'date' and 'count' properties
        const calendarData = Object.entries(commitCounts).map(([date, count]) => ({
          date,
          count,
        }));
        setCalendarData(calendarData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Box>
      <CalendarHeatmap
        startDate={moment().subtract(1, 'year').toDate()}
        endDate={new Date()}
        values={calendarData}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value) => ({
          'data-tip': `${value.date}: ${value.count} commits`,
        })}
      />
    </Box>
  );
};

export default GithubCalendar;
