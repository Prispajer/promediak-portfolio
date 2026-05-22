import { SendEmailRequest } from "@/types/mail";

export default interface IMailService {
  send(data: SendEmailRequest): Promise<void>;
}
