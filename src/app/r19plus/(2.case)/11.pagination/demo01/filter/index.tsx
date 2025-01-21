import Flex from 'components/ui/flex'
import Input from './Input'
import Select from './select'

export interface Parameter {
  search?: string,
  count?: number,
  current?: number
}

export default function Filter({ onChange }: {
  onChange: (parameter: Parameter) => any
}) {
  function __inputChange(e: any) {
    onChange && onChange({ search: e.target.value })
  }

  function __selected(value: number) {
    onChange && onChange({ count: value })
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='1' onChange={__selected} />
    </Flex>
  )
}
