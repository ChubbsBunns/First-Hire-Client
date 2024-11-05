import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function FAQComponent() {
  return (
    <div className="overflow-y-auto flex justify-center relative rounded-md p-10 flex-col" id="FAQ">
        <div className="flex justify-center align-middle p-5 text-lg md:text-4xl font-semibold text-custom-teal">
            FAQ (Frequently Asked Questions)
        </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What does signing up for First Hire give me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Signing Up for First Hire allows you to receive emails of new job openings matching your needs, all within a day of them being posted on official company portals.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            What happens upon submitting my details in the First Hire Page?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will receive your first email which includes every single job that is currently posted on each company portal that matches your details.
            Subsequent emails will only include job openings that have been posted in the last 24 hours.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Will I be sent repeated emails for the same Job Opening?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No you will not. Once a job has been sent to you in an email, that same job will not be sent to you again.
            This means that each email includes uniquely new jobs that have been posted in the last 24 hours (or over the weekend).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <Typography>How does First Hire work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The team automatically scrapes the job portals daily, checking for new jobs.
            At approximately 6pm everyday, this automation tool will then send out emails to everyone if there are any new jobs matching their requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FAQComponent
