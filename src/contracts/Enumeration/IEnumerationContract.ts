import { Enumeration } from "../../entities/Enumeration";
import { EnumValidatoin } from "../../entities/EnumValidatoin";

export interface IEnumerationContract {
  /**
   * This function return enumeratino values
   *
   * @param enumcode: string
   * @param language: string;
   *
   * @return Enumeration ../../entities/Enumeration
   */
  returnEnumeration(enumPair: Enumeration): Promise<Enumeration>;

  /**
   * This function will check / validate Enumeration value
   * and return validation state for the requested enum value
   *
   * @param enumcode: string
   * @param language: string
   *
   * @reutn false/true boolean
   */
  isEnumerationValueValid(enumPair: EnumValidatoin): boolean;
}
