'use strict'

export default coreLogicConstructor

// TODO: Finish this type
interface CoreLogicAPI {
  myFirstFunction: () => void
  [index: string]: Function
}

interface CoreLogic {
  clRuntime: CoreLogicRuntime
  clAPI: CoreLogicAPI
}
type CoreLogicProps = Omit<CoreLogic, 'clAPI'>

function coreLogicConstructor (props: CoreLogicProps): CoreLogic {
  return {
    ...props,
    clAPI:
    {
      myFirstFunction: () => console.log('[CoreLogic.API.myFirstFunction] HELLO WORLD')
    }
  }
}

export interface CoreLogicRuntime {
  applicationShell: ApplicationShell
}

export enum ApplicationShell {
  DesktopApp = 'desktop-app',
  WebApp = 'web-app',
  ConsoleApp = 'console-app'
  // MobileApp
  // CloudFunctions
}
