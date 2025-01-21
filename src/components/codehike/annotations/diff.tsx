import { AnnotationHandler, InnerLine, BlockAnnotation } from "codehike/code"

export const diff: AnnotationHandler = {
  name: "diff",
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query == "-" ? "#f85149" : "#3fb950"
    return [annotation, { ...annotation, name: "mark", query: color }]
  },
  Line: ({ annotation, ...props }) => (
    <div className='flex'>
      <div className='ml-2 text-gray-400 select-none'>
        {annotation?.query || ' '}
      </div>
      <InnerLine merge={props} />
    </div>
  ),
}
