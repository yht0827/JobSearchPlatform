import { withStateHandlers } from "recompose";

const WithStepChange = withStateHandlers(
    { 
        action: "main",
        current: 1,
        steps: [
            {
                key: 1,
                icon: "user",
                active: true,
                completed: false,
                disabled: false,
                title: "개인 정보 작성",
            },
            {
                key: 2,
                icon: "write",
                active: false,
                completed: false,
                disabled: true,
                title: "자기소개서 작성",
            },
            { 
                key: 3,
                icon: "signing",
                active: false,
                completed: false,
                disabled: true,
                title: "제출 완료",
            },
        ],
    },
    {
        ChangeAction: () => value => ({
            action: value,
        }),
        changeNextStep: ({ steps }) => (current) => ({
            current: current + 1,
            steps: steps.map(
                step => current === step.key
                    ? { ...step, completed: true, active: false }
                    : current + 1 === step.key
                        ? { ...step, completed: false, active: true, disabled: false }
                        : step,
            ),
        }),
        stepReset: ({ steps }) => () => ({
            current: 1,
            action: "main",
            steps: steps.map(
                step => step.key === 1
                    ? { ...step, active: true, completed: false, disabled: false }
                    : { ...step, active: false, completed: false, disabled: true },
            ),
        }),
    },
);

export default WithStepChange;
