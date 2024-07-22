import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import type { Editor } from '@tiptap/react'
interface Props {
  editor: Editor | null
}

const CustomBubbleMenu = ({ editor }: Props) => {
  return <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
}

export default CustomBubbleMenu
