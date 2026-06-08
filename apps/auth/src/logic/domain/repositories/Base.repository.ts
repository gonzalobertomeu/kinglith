export abstract class BaseRepository<T> {
  abstract findById(id: string): Promise<T | null>;
  abstract save(domain: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
