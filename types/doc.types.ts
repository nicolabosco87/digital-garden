
export type DirResult = {
    dirs: {
      [dir: string]: DirResult;
    };
    files: {
      title: string;
      id: string;
      filename: string;
    }[]
  }


  export type MenuStructure = {
    id: string,
    title: string
  }[]