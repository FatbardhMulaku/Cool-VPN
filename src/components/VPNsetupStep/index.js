import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoTxt from "../Shared/Text/TextInfoNew";
import Protocols from "../LatestVPNprotocols/Protocols";
import { ProtocolList } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
	color:"white",
	"& .MuiStepLabel-label.MuiStepLabel-active" :{
		color:"white",
		fontWeight:"bold"
	},
	"& .MuiStepLabel-label":{
		color:"white",
	},
	"& .MuiStepIcon-root.MuiStepIcon-active":{
		color:"#734AF2"
	},
	"& .MuiButton-label":{
		color:"white",
	}
  },
  button: {
	marginRight: theme.spacing(1),
	color:"white"
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
	display: 'inline-block',
	color:"white"
  },
  instructions: {
    marginTop: theme.spacing(1),
	marginBottom: theme.spacing(1),
	color:"white"
  },
  steps:{
	  color:"white"
  }
}));

function getSteps() {
  return ['Choose Operating System', 'Choose Protocol', 'The Instructions'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="row justify-content-center case1">
			<p  className="col-3 my-auto">Sistem Operations</p>
			<div className="col-7 select_step">
				<select className="select_step--css">
					<option className="select_step--css__sub">Windows</option>
					<option className="select_step--css__sub">Linux</option>
					<option className="select_step--css__sub">Mac</option>
					<option className="select_step--css__sub">Ubuntu</option>
					<option className="select_step--css__sub">Mint</option>
				</select>
			</div>
        </div>
      );
    case 1:
      return (
		 <div>
			 {ProtocolList.map(({ title, desc}, idx) => (
				<Protocols 
				key={idx+1}
				txt={`LatestVPNprotocols.section_2_${idx+1}`}
				title={title} 
				desc={desc}
				BGcolor="transparent"
				color="white !important"
				hover="rgba(0, 0, 0, 0.333)"
				border="2px solid rgba(255, 255, 255, 0.158)"
			/>
			))}
		 </div>
	  );
    case 2:
      return (
		  <h1 className="my-5">Thank You</h1>
	  );
    default:
      return 'Unknown step';
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={`${classes.root} VPNsStep bg `}>
		<div className="container">
		<InfoTxt 
				txt="VPNsetupStep.section_1" textAlign="center" color="white" margin="10px 0 100px 0" klasa="VPNsStep__txt"
				DfTitle="What's  your operation system?" 
				DfDesc="We don’t leave you in mid air 24/7 support via live chat, Tickets, FAQs, Emails & our Community."
			/>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} className={classes.steps}>
              <StepButton
			    className={classes.steps}
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
	  </div>
    </div>
  );
}

