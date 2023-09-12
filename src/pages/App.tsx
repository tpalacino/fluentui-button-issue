import { DetailsList, PrimaryButton, Stack } from '@fluentui/react'

/*

Steps to resolve the issue:
    1. Replace line 1 with "import { DetailsList, Stack } from '@fluentui/react'"
    2. Delete line 14

*/

export function App() {
    return <Stack tokens={{ padding: 24, childrenGap: 16 }}>
        <PrimaryButton>Change</PrimaryButton>
        <DetailsList
            items={[
                { key: "1", name: "r", color: "red" },
                { key: "2", name: "g", color: "green" },
                { key: "3", name: "b", color: "blue" },
            ]}
        />
    </Stack>
}