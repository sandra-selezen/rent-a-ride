import { ContainerWrapper } from "./Container.styled"

interface Props {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <main>
      <ContainerWrapper>
        {children}
      </ContainerWrapper>
    </main>
  )
}
