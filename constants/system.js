export const DataSourceType = {
  Local: 1,
  Remote: 2,
  getDefault() {
    return this.Local;
  }
}