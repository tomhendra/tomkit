import { Text } from "@/components/ui/text"
import { getExpenses } from "@/lib/helpers/api-helpers"
import { useQuery } from "@tanstack/react-query"
import { View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

function ExpensesScreen() {
  const { styles } = useStyles(stylesheet)

  const { isPending, error, data } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  })

  console.log({ data })

  return (
    <View style={styles.container}>
      <Text type="title">Expenses</Text>
      {isPending && <Text>Loading...</Text>}
      {error && <Text>An error has occurred: {error.message}</Text>}
      <View style={styles.body}>
        <Text>Expenses</Text>
      </View>
    </View>
  )
}

const stylesheet = createStyleSheet((t, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top + t.space8,
    paddingRight: rt.insets.right + t.space8,
    paddingBottom: rt.insets.bottom,
    paddingLeft: rt.insets.left + t.space8,
    backgroundColor: t.colorBackground,
  },
  body: {
    flex: 1,
  },
}))

export { ExpensesScreen }
